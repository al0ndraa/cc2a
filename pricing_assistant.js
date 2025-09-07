// Coding Challenge 00

// Code goes here

const productName = "Dr Pepper"; 
let costPerUnit= 1.00;
let basePrice = 3.50
let discountRate = 0.20;
let salesTaxRate = 0.10;
let fixedMonthlyCosts = 800;

    let discountedPrice = basePrice * (1-discountRate);
    let finalPriceWithTax = discountedPrice * (1+salesTaxRate);
    let profitPerUnit = finalPriceWithTax - costPerUnit;
    let breakEvenUnits = Math.ceil (fixedMonthlyCosts/profitPerUnit);
    let isProfitablePerUnit = profitPerUnit > 0;

        console.log ("Dr Pepper");
        console.log ("Discounted Price: $" + discountedPrice.toFixed(2));
        console.log ("Final Price with Tax: $" + finalPriceWithTax.toFixed(2));
        console.log ("Profit Per Unit: $" + profitPerUnit.toFixed(2));
        console.log ("Break-Even Units: " +breakEvenUnits.toFixed(2))
        console.log (isProfitablePerUnit || 0)