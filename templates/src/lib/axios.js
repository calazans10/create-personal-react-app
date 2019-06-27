import axios from 'axios';

class AxiosFactory {
  createInstance(url) {
    const source = axios.CancelToken.source();
    this.instance = axios.create({
      baseURL: url,
      timeout: process.env.REACT_APP_TIMEOUT,
      cancelToken: source.token,
    });

    this.instance.interceptors.request.use(
      config => {
        setTimeout(() => {
          source.cancel();
        }, process.env.REACT_APP_TIMEOUT + 1000);

        return config;
      },
      error => {
        const enhancedError = this.enhanceError(error);
        Promise.reject(enhancedError);
      }
    );

    this.instance.interceptors.response.use(
      config => config,
      error => {
        const enhancedError = this.enhanceError(error);
        return Promise.reject(enhancedError);
      }
    );

    return this.instance;
  }

  static enhanceError = error => {
    const defaultMessage = 'Não foi possível realizar a operação. Tente novamente.';
    const enhancedError = error || {};

    if (!enhancedError.response) {
      enhancedError.response = {};
      enhancedError.response.message = defaultMessage;
    }

    const { status } = enhancedError.response;
    if (!status) {
      enhancedError.response.status = 0;
    }

    return enhancedError;
  };
}

export default new AxiosFactory();
