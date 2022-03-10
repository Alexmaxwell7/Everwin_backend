const express = require('express');

const ExpensesController = require('../controller/index');
const AssetAllocationController = require('../controller/assetAllocationController');

const router = express.Router()


//expenses router
router.post('/createExpenses',ExpensesController.createExpenses);
router.get('/getExpenses',ExpensesController.getExpenses);
// router.put('/updateExpenses/:id',ExpensesController.updateExpenses);
router.delete('/deleteExpenses/:id',ExpensesController.deleteExpenses);
//expensestype router
router.post('/createExpensestype',ExpensesController.createExpensestype);
router.get('/getExpensesType',ExpensesController.getExpensesType);
router.delete('/deleteExpensestype/:id',ExpensesController.deleteExpensestype);
//asset_stock router
router.get('/getAsset_Stock',AssetAllocationController.getAsset_Stock);
router.post('/createAsset_Stock',AssetAllocationController.createAsset_Stock);
router.delete('/deleteAsset_Stock/:id',AssetAllocationController.deleteAsset_Stock);
router.get('/getAsset_Allocation',AssetAllocationController.getAsset_Allocation);
router.post('/createAsset_Allocation',AssetAllocationController.createAsset_Allocation);
router.delete('/deleteAsset_Allocation/:id',AssetAllocationController.deleteAsset_Allocation);
router.get('/getAsset_Settings',AssetAllocationController.getAsset_Settings);
router.post('/createAsset_Settings',AssetAllocationController.createAsset_Settings);
router.delete('/deleteAsset_Settings/:id',AssetAllocationController.deleteAsset_Settings);


module.exports=router