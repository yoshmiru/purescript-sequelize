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

import Sequelize from 'sequelize';

export const _STRING = Sequelize.STRING;
export const _CHAR = Sequelize.CHAR;
export const _TEXT = Sequelize.TEXT;
export const _INTEGER = Sequelize.INTEGER;
export const _BIGINT = Sequelize.BIGINT;
export const _BIGINT0 = Sequelize.BIGINT;
export const _FLOAT = Sequelize.FLOAT;
export const _FLOAT0 = Sequelize.FLOAT;
export const _FLOAT1 = Sequelize.FLOAT;
export const _DOUBLE = Sequelize.DOUBLE;
export const _DOUBLE0 = Sequelize.DOUBLE;
export const _DOUBLE1 = Sequelize.DOUBLE;
export const _DECIMAL = Sequelize.DECIMAL;
export const _DECIMAL0 = Sequelize.DECIMAL;
export const _REAL = Sequelize.REAL;
export const _REAL0 = Sequelize.REAL;
export const _REAL1 = Sequelize.REAL;
export const _BOOLEAN = Sequelize.BOOLEAN;
export const _BLOB = Sequelize.BLOB;
export const _DATE = Sequelize.DATE;
export const _DATE0 = Sequelize.DATE;
export const _DATEONLY = Sequelize.DATEONLY;
export const _TIME = Sequelize.TIME;
export const _NOW = Sequelize.NOW;
export const _UUID = Sequelize.UUID;
export const _UUIDV1 = Sequelize.UUIDV1;
export const _UUIDV4 = Sequelize.UUIDV4;
export const _HSTORE = Sequelize.HSTORE;
export const _JSON = Sequelize.JSON;
export const _JSONB = Sequelize.JSONB;
export const _ARRAY = Sequelize.ARRAY;
export const _RANGE = Sequelize.RANGE;
export const _GEOMETRY = Sequelize.GEOMETRY;
export const _GEOGRAPHY = Sequelize.GEOGRAPHY;
export const _VIRTUAL = Sequelize.VIRTUAL;

export const _ENUM = function (arr) {
  return Sequelize.ENUM.apply(this, arr);
};
