const { addExpense,getExpense,deleteExpense } = require('../controllers/expenses');
const {addIncome}=require('../controllers/income');
const {getIncomes}=require('../controllers/income');
const {deleteIncomes}=require('../controllers/income');
const router=require("express").Router()


router.post('/add-income',addIncome)
router.get('/get-income',getIncomes)
router.delete('/delete-income/:id',deleteIncomes);
router.post('/add-expense',addExpense)
router.get('/get-expense',getExpense)
router.delete('/delete-expense/:id',deleteExpense)


module.exports=router