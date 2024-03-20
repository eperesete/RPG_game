let village = document.querySelector(".village") // div деревни
let inventory = document.querySelector(".inventory") // div инвентаря
let market = document.querySelector(".market") // div рынка
let environment = document.querySelector(".environment") // div окружения
let menus = [village,inventory,market,environment]

let btn_go_village = document.querySelector(".btn_go_village") // кнопка перехода в деревню
let btn_go_inventory = document.querySelector(".btn_go_inventory") // кнопка перехода в инвентарь
let btn_go_market = document.querySelector(".btn_go_market") // кнопка перехода в рынок
let btn_go_environment = document.querySelector(".btn_go_environment") // кнопка перехода в окружение

let go_human_work_in_forest = document.querySelector(".go_human_work_in_forest") // кнопка назначения человека на работу в лесу
let quit_human_work_in_forest = document.querySelector(".quit_human_work_in_forest") // кнопка увольнения человека с работы в лесу

let craft_hous = document.querySelector(".craft_hous") // кнопка крафта дома
let craft_fried_meat = document.querySelector(".craft_fried_meat") // кнопка крафта жаренного мяса

let go_forest = document.querySelector(".go_forest") // кнопка исследовать лес


let humans = 2 // кол-во жителей
let max_humans = 4 // макс. кол-во жителей
let houses = 1 // кол-во домов
let meat = 10 // кол-во мяса
let fried_meat = 10 // кол-во жаренного мяса
let wood = 10 // кол-во дерева

let nowork_humans = 0 // кол-во не работающих людей
let forest_humans = 4 // кол-во людей работающих в лесу
works = [nowork_humans, forest_humans]

let logs = [] // логи (новые строки логов добавляются в начало списка)
let tiks = 0 // тики
let tiks_long = 10

function updateWindow(){ // функция обновления экрана

}

function time() {
    tiks += 1
    work_humans()
    setTimeout(function(){
        time()
    }, tiks_long * 1000)
}
time()

function work_humans() {
    wood += 0.5 * forest_humans
    meat += 0.4 * forest_humans

    if (humans > fried_meat){
        let dead_humans = humans - fried_meat
        humans -= dead_humans
        for (let i = 0; i < works.length; i += 1){
            if (works[i] > dead_humans){
                works[i] -= dead_humans
                dead_humans = 0
            }
            else{
                dead_humans -= works[i]
                works[i] = 0
            }
        }
        logs.add(0,`${dead_humans} человек погибло :(`)
    }

    if ((fried_meat > humans*2) && (humans < max_humans)){
        humans += 1
        nowork_humans += 1
        logs.add(0,"у вас появился новый житель!")
    }
    fried_meat -= humans

}

//иследования
go_forest.addEventListener('click', function() {
    if (Math.random() <= 0.3){
        wood += 1
        logs.add(0,"Вы нашли одно дерево!");
    }
    if (Math.random() <= 0.2){
        meat += 1
        logs.add(0,"Вы нашли одно мясо!");
    }
})


//крафты
craft_hous.addEventListener('click', function() {
    if (wood >= 100){
        wood -= 100
        houses += 1
        max_humans += 4
        logs.add(0,"Вы построиили ещё один дом!");
    }
})

craft_fried_meat.addEventListener('click', function() {
    if ((wood >= 2) && (meat >= 1)){
        wood -= 2
        meat -= 1
        fried_meat += 1
        logs.add(0,"Вы приготовили ещё одно жаренное мясо!");
    }
})


//назначения и увольнения
go_human_work_in_forest.addEventListener('click', function() {
    if (nowork_humans > 0){
        nowork_humans -= 1
        forest_humans += 1
    }
    logs.add(0,"Ещё один житель теперь работает в лесу!");
})
quit_human_work_in_forest.addEventListener('click', function() {
    if (forest_humans > 0){
        forest_humans -= 1
        nowork_humans += 1
    }
    logs.add(0,"Ещё один житель теперь безработынй...");
})


//меню
btn_go_village.addEventListener('click', function() {
    for (let i = 0; i < menu.length; i += 1){
        menus[i].style.display = 'none'
    }
    village.style.display = 'flex'
})
btn_go_inventory.addEventListener('click', function() {
    for (let i = 0; i < menu.length; i += 1){
        menus[i].style.display = 'none'
    }
    inventory.style.display = 'flex'
})
btn_go_market.addEventListener('click', function() {
    for (let i = 0; i < menu.length; i += 1){
        menus[i].style.display = 'none'
    }
    market.style.display = 'flex'
})
btn_go_environment.addEventListener('click', function() {
    for (let i = 0; i < menu.length; i += 1){
        menus[i].style.display = 'none'
    }
    environment.style.display = 'flex'
})