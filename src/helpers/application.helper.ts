import apllicationHelper from "../interfaces/Application.helper.interface";

class AppHelper implements apllicationHelper {
  public async httpRequest(
    url: string,
    method?: string,
    data?: any,
    headers?: any
  ) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  }

  public async getCountryList() {
    return await this.httpRequest(
      "http://localhost:3002/api/loc_country",
      "GET"
    );
  }

  public async getStateList() {
    return await this.httpRequest(`http://localhost:3002/api/loc_state`, "GET");
  }

  public async getPartnerLocators() {
    return await this.httpRequest(
      `http://localhost:3002/api/partner_locator`,
      "GET"
    );
  }

  public async searchPartnerLocators(data: any) {
    return await this.httpRequest(
      `http://localhost:3002/api/partner_locator/search`,
      "POST",
      data,
      {
        "Content-Type": "application/json",
      }
    );
  }

  public async getPartnersByParams(data: any) {
    return await this.httpRequest(
      `http://localhost:3002/api/partner_locator/search/by`,
      "POST",
      data,
      {
        "Content-Type": "application/json",
      }
    );
  }
}

export default AppHelper;
