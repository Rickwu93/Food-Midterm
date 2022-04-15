/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const {sendRestaurantSMS, sendCustomerSMS} = require ('../routes/send-SMS.js')
const express = require('express');
const router  = express.Router();

module.exports = (db) => {


  router.get("/", (req, res) => {
    if (!req.session,customer_id) {
      return res.redirect()
    }

    db.query(query)
      .then(data => {
        const widgets = data.rows;
        res.json({ widgets });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};


