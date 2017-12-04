import { action } from "mobx";
import request from "superagent";

import Store from "../stores/Store";

const CONTENTFUL_BASE_URL = process.env.CONTENTFUL_BASE_URL;
const CONTENT_DELIVERY_ACCESS_TOKEN = process.env.CONTENT_DELIVERY_ACCESS_TOKEN;
const SPACE_ID = process.env.SPACE_ID;

class Actions {
  constructor() {
  }

  @action updatePortfolioList() {
    request
      .get(`${CONTENTFUL_BASE_URL}/spaces/${SPACE_ID}/entries`)
      .query(`access_token=${CONTENT_DELIVERY_ACCESS_TOKEN}&content_type=portfolio`)
      .end(function(err, res){
        if (err || !res.ok) {
          console.log('error');
        } else {
          Store.portfolioList = res.body.items;
        }
      });
  }
}

export default new Actions;