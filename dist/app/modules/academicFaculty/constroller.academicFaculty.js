'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AcademicFacultyController = void 0;
const http_status_1 = __importDefault(require('http-status'));
const pagination_1 = require('../../../constant/pagination');
// import { globalImport } from '../../../import/global_Import';
// import ApiError from '../../errors/ApiError';
const catchAsync_1 = __importDefault(require('../../share/catchAsync'));
const pick_1 = __importDefault(require('../../share/pick'));
const sendResponse_1 = __importDefault(require('../../share/sendResponse'));
const consent_academicFaculty_1 = require('./consent.academicFaculty');
const service_academicFaculty_1 = require('./service.academicFaculty');
// import { z } from 'zod'
const createAcademicFaculty = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const academicData = __rest(req.body, []);
    const result =
      yield service_academicFaculty_1.AcademicFacultyService.createAcademicFacultyByDb(
        academicData
      );
    (0, sendResponse_1.default)(res, {
      success: true,
      statusCode: http_status_1.default.OK,
      message: 'successfull create academic Faculty',
      data: result,
    });
    // next();
    /* res.status(200).send({
      success: true,
      data: result,
      message: 'successfull create academic Faculty',
    }); */
  })
);
const getAllAcademicFaculty = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    //****************search and filter start******* */
    const filters = (0, pick_1.default)(
      req.query,
      consent_academicFaculty_1.ACADEMIC_FACULTY_FILTERABLE_FIELDS
    );
    //****************pagination start************ */
    const paginationOptions = (0, pick_1.default)(
      req.query,
      pagination_1.PAGINATION_FIELDS
    );
    const result =
      yield service_academicFaculty_1.AcademicFacultyService.getAllAcademicFacultyFromDb(
        filters,
        paginationOptions
      );
    (0, sendResponse_1.default)(res, {
      success: true,
      statusCode: http_status_1.default.OK,
      message: 'successfull Get academic Faculty',
      meta: result.meta,
      data: result.data,
    });
    // next();
  })
);
const getSingleAcademicFaculty = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    /*   if (!globalImport.ObjectId.isValid(id)) {
      throw new ApiError(400, 'invalid id sampod');
    } */
    const result =
      yield service_academicFaculty_1.AcademicFacultyService.getSignleFacultyFromDb(
        id
      );
    /* if (!result) {
      throw new ApiError(400, 'No data found');
    } */
    (0, sendResponse_1.default)(res, {
      success: true,
      statusCode: http_status_1.default.OK,
      message: 'successfull get academic Faculty',
      data: result,
    });
  })
);
const updateAcademicFaculty = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateData = req.body;
    /*   if (!globalImport.ObjectId.isValid(id)) {
      throw new ApiError(400, 'invalid id sampod');
    } */
    const result =
      yield service_academicFaculty_1.AcademicFacultyService.updateFacultyFromDb(
        id,
        updateData
      );
    /* if (!result) {
      throw new ApiError(400, 'No data found');
    } */
    (0, sendResponse_1.default)(res, {
      success: true,
      statusCode: http_status_1.default.OK,
      message: 'successfull update academic Faculty',
      data: result,
    });
  })
);
const deleteAcademicFaculty = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result =
      yield service_academicFaculty_1.AcademicFacultyService.deleteFacultyByIdFromDb(
        id
      );
    (0, sendResponse_1.default)(res, {
      success: true,
      statusCode: http_status_1.default.OK,
      message: 'successfull delete academic Faculty',
      data: result,
    });
  })
);
exports.AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
  deleteAcademicFaculty,
};