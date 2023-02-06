interface apllicationHelper {
  httpRequest: (
    url: string,
    method: string,
    data: any,
    headers: Object
  ) => Promise<Object>;

  getCountryList: () => void;

  getStateList: () => void;
}

export default apllicationHelper;
