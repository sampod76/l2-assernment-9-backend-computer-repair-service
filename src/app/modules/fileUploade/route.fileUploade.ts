import express from 'express';
// import authMiddleware from '../../middlewares/authMiddleware';
import {
  uploadMultipleImage,
  uploadPdfFile,
  uploadSingleImage,
  uploadSingleImageByProfile,
  uploadVideoFile,
} from '../../middlewares/uploader.multer';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { FileUploadeController } from './constroller.fileUploade';
import { FileUploadeValidation } from './validation.fileUploade';

const router = express.Router();

router
  .route('/uploade-single-image')
  .post(
    // authMiddleware(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.GENERAL_USER),
    uploadSingleImage,
    FileUploadeController.uploadeSingleFileByServer
  );

router
  .route('/uploade-profile-image')
  .post(
    // authMiddleware(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.GENERAL_USER),
    uploadSingleImageByProfile,
    FileUploadeController.uploadeProfileFileByServer
  );

router
  .route('/uploade-multipal-images')
  .post(
    // authMiddleware(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.GENERAL_USER),
    uploadMultipleImage,
    FileUploadeController.uploadeMultipalFileByServer
  );

router
  .route('/uploade-video')
  .post(
    // authMiddleware(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.GENERAL_USER),
    uploadVideoFile,
    FileUploadeController.uploadeSingleFileByServer
  );

router
  .route('/uploade-pdf')
  .post(
    // authMiddleware(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.GENERAL_USER),
    uploadPdfFile,
    FileUploadeController.uploadeSingleFileByServer
  );
// router.route('/uploade-multipal-videos').post(
//   uploadMultipleImage, FileUploadeController.uploadeSingleFileByServer);

router
  .route('/')
  .get(
    // authMiddleware(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.GENERAL_USER),
    FileUploadeController.getAllFileUploade
  )
  .post(
    // authMiddleware(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.GENERAL_USER),
    validateRequestZod(FileUploadeValidation.createFileUploadezodSchema),
    FileUploadeController.createFileUploade
  );

router
  .route('/:id')
  .get(
    // authMiddleware(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.GENERAL_USER),
    FileUploadeController.getSingleFileUploade
  )
  .patch(
    // authMiddleware(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.GENERAL_USER),
    validateRequestZod(FileUploadeValidation.updateFileUploadezodSchema),
    FileUploadeController.updateFileUploade
  )
  .delete(FileUploadeController.deleteFileUploade);

export const FileUploadeRoute = router;
