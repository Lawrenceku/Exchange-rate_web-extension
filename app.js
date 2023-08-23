//constants
const AMOUNT = document.getElementById('amount')
const BASECURRENCY = document.querySelector('#baseCurrency')
const CURRENCY = document.querySelector('#Currency')
const BUTTON = document.querySelector('#btn')
const RESULT = document.querySelector('[data-result]')

var result=0
var x =0
var amount = parseFloat(AMOUNT.value)
//add currency codes options

currencies.forEach(
	()=>{
		var a = document.createElement('option')
		var b =document.createElement('option')
		a.innerHTML= currencies[x]
		b.innerHTML= currencies[x]
		BASECURRENCY.appendChild(a)
		CURRENCY.appendChild(b)
		x++
		}
) 

//functions

const convert = ()=>{
var from = BASECURRENCY.value
var to = CURRENCY.value
var api = `https://v6.exchangerate-api.com/v6/17ee3636452c90638856918d/pair/${from}/${to}/${amount}`
	if (isNaN(amount)){
		confirm('input a valid number')
		AMOUNT.innerHTML=''
	}
	else if(!isNaN(amount)){
		fetch(api)
		.then(resp =>resp.json())
		.then((data)=>{
			RESULT.innerHTML = `Result: ${data.conversion_result.toLocaleString()}${to}`
		})
	}
}



//Event listeners
BUTTON.addEventListener('click',convert)
 