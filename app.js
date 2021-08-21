//Set text value at tag
function setTextValue(value,tagName){
    const tagCatch=document.getElementById(tagName)
    tagCatch.innerText=value;

}
//get value from tag
function getTextValue(tagname){
    const tagCatch=document.getElementById(tagname)
    const tagtext=tagCatch.innerText
    const tagValue=parseFloat(tagtext)
    return tagValue
}
//calculate total price
function Sum(){
    const macBookPrice=getTextValue('mac-book-price')
    const memoryPrice=getTextValue('ex-memory-price')
    const SSdprice=getTextValue('ssd-price')
    const delivaryPrice=getTextValue('delivary-price')
    const totolPrice=macBookPrice+memoryPrice+SSdprice+delivaryPrice
    return totolPrice
}
//hadling memory related button
document.getElementById('memory-8gb').addEventListener('click',function(){
    setTextValue(0,'ex-memory-price')
    const totalPrice=Sum()
    setTextValue(totalPrice,'total-price')
    setTextValue(totalPrice,'finall-total')
})
document.getElementById('memory-16gb').addEventListener('click',function(){
    setTextValue(180,'ex-memory-price')
    const totalPrice=Sum()
    setTextValue(totalPrice,'total-price')
    setTextValue(totalPrice,'finall-total')
})
//hadling SSD related button
document.getElementById('ssd-256').addEventListener('click',function(){
    setTextValue(0,'ssd-price')
    const totalPrice=Sum()
    setTextValue(totalPrice,'total-price')
    setTextValue(totalPrice,'finall-total')
})
document.getElementById('ssd-512').addEventListener('click',function(){
    setTextValue(100,'ssd-price')
    const totalPrice=Sum()
    setTextValue(totalPrice,'total-price')
    setTextValue(totalPrice,'finall-total')
})
document.getElementById('ssd-1tb').addEventListener('click',function(){
    setTextValue(180,'ssd-price')
    const totalPrice=Sum()
    setTextValue(totalPrice,'total-price')
    setTextValue(totalPrice,'finall-total')
})
//handling delivary lelated button
document.getElementById('free-delivary').addEventListener('click',function(){
    setTextValue(0,'delivary-price')
    const totalPrice=Sum()
    setTextValue(totalPrice,'total-price')
    setTextValue(totalPrice,'finall-total')
})

document.getElementById('not-free-delivary').addEventListener('click',function(){
    setTextValue(20,'delivary-price')
    const totalPrice=Sum()
    setTextValue(totalPrice,'total-price')
    setTextValue(totalPrice,'finall-total')
})
//handling pomo code part 
document.getElementById('apply').addEventListener('click',function(){
    const inputTag=document.getElementById('input-text')
    const inputText=inputTag.value
    if(inputText=='stevekaku'){
        const totalPrice=Sum()
        const subTotalprice=(totalPrice/100)*20
        const finallPrice=totalPrice-subTotalprice
        setTextValue(finallPrice,'finall-total')
        inputTag.value=''
    }
})
