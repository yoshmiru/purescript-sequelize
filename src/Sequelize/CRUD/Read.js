/*
* Copyright (c) 2012-2017 "JUSPAY Technologies"
* JUSPAY Technologies Pvt. Ltd. [https://www.juspay.in]
*
* This file is part of JUSPAY Platform.
*
* JUSPAY Platform is free software: you can redistribute it and/or modify
* it for only educational purposes under the terms of the GNU Affero General
* Public License (GNU AGPL) as published by the Free Software Foundation,
* either version 3 of the License, or (at your option) any later version.
* For Enterprise/Commerical licenses, contact <info@juspay.in>.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  The end user will
* be liable for all damages without limitation, which is caused by the
* ABUSE of the LICENSED SOFTWARE and shall INDEMNIFY JUSPAY for such
* damages, claims, cost, including reasonable attorney fee claimed on Juspay.
* The end user has NO right to claim any indemnification based on its use
* of Licensed Software. See the GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.
*/

export function _findById(model, id) {
  return model.findById(id);
};

export function _findOne(model, opts) {
  return model.findOne(opts);
};

export function _findOrBuild(model, opts) {
  return model.findOrBuild(opts);
};

export function _findOrCreate(model, opts) {
  return model.findOrCreate(opts);
};

export function _findAndCountAll(model, opts) {
  return model.findAndCountAll(opts);
};

export function _findAll(model, opts) {
  return model.findAll(opts);
};

export function _count(model, opts) {
  return model.count(opts);
};

export function _max(model, opts, field) {
  return model.max(field, opts);
};

export function _min(model, opts, field) {
  return model.min(field, opts);
};

export function _query = function(seq) {
  return function(rawquery) {
    return function() {
      return seq.query(rawquery, {
        type: seq.QueryTypes.SELECT
      });
    }
  }
};
