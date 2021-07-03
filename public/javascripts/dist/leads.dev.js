"use strict";

function deleteLead(leadID) {
  $.ajax({
    url: '/lead/' + leadID + '/delete-json',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: JSON.stringify({
      leadID: leadID
    }),
    type: 'POST',
    success: function success(res) {
      console.log('Result: ', res);
      $("#" + leadID).remove();
    },
    error: function error(_error) {
      console.log("error", _error);
    }
  });
}