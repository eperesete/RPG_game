let village = document.querySelector(".village") // div деревни
let inventory = document.querySelector(".inventory") // div инвентаря
let market = document.querySelector(".market") // div рынка
let environment = document.querySelector(".environment") // div окружения
let battle_screen = document.querySelector(".battle_screen") // div экрана битвы
let menus = [village,inventory,market,environment,battle_screen]

let cook_humans_menu = document.querySelector(".cook_humans_menu") // div поваров

let btn_go_village = document.querySelector(".btn_go_village") // кнопка перехода в деревню
let btn_go_inventory = document.querySelector(".btn_go_inventory") // кнопка перехода в инвентарь
let btn_go_market = document.querySelector(".btn_go_market") // кнопка перехода в рынок
let btn_go_environment = document.querySelector(".btn_go_environment") // кнопка перехода в окружение

let go_human_work_in_forest = document.querySelector(".go_human_work_in_forest") // кнопка назначения человека на работу в лесу
let quit_human_work_in_forest = document.querySelector(".quit_human_work_in_forest") // кнопка увольнения человека с работы в лесу
let go_human_work_cook = document.querySelector(".go_human_work_cook") // кнопка назначения человека на работу поваром
let quit_human_work_cook = document.querySelector(".quit_human_work_cook") // кнопка увольнения человека с работы поваром

let input_fried_meat = document.querySelector(".input_fried_meat") // кнопка добавления жаренного мяса в инвентарь
let output_fried_meat = document.querySelector(".output_fried_meat") // кнопка удаления жаренного мяса из инвентаря
let input_wood_sword = document.querySelector(".input_wood_sword") // кнопка добавления деревянного меча в инвентарь
let output_wood_sword = document.querySelector(".output_wood_sword") // кнопка удаления деревянного меча из инвентаря

let craft_hous = document.querySelector(".craft_hous") // кнопка крафта дома
let craft_fried_meat = document.querySelector(".craft_fried_meat") // кнопка крафта жаренного мяса
let craft_wood_sword = document.querySelector(".craft_wood_sword") // кнопка крафта деревянного меча

let buy_cookbook_one = document.querySelector(".buy_cookbook_one") // купить кулинарную книгу том 1
let buy_cookbook_two = document.querySelector(".buy_cookbook_two") // купить кулинарную книгу том 2
let buy_cookbook_three = document.querySelector(".buy_cookbook_three") // купить кулинарную книгу том 3
let buy_foresting_one = document.querySelector(".buy_foresting_one") // купить лесничество том 1
let buy_foresting_two = document.querySelector(".buy_foresting_two") // купить лесничество том 2
let buy_foresting_three = document.querySelector(".buy_foresting_three") // купить лесничество том 3

let go_forest = document.querySelector(".go_forest") // кнопка исследовать лес
let go_cave = document.querySelector(".go_cave") // кнопка исследовать лес

let eat_fried_meat = document.querySelector(".eat_fried_meat") // действие съесть жаренное мясо


let max_hp = 50 // максимальное здоровье игрока
let hp = 50 // здоровье игрока

let humans = 2 // кол-во жителей
let max_humans = 4 // макс. кол-во жителей
let houses = 1 // кол-во домов
let meat = 10 // кол-во мяса
let fried_meat = 10 // кол-во жаренного мяса
let wood = 10 // кол-во дерева
let wood_sword = 0 // кол-во деревянных мечей

let inventory_max_slots = 20 //кол-во слотов в инвентаре
let inventory_free_slots = 20 //кол-во не занятых слотов в инвентаре
let inventory_items = {
    fried_meats : 0,
    wood_swords : 0,
    dead(){
        this.fried_meats = 0
        this.wood_swords = 0
    }
}

let nowork_humans = 0 // кол-во не работающих людей
let forest_humans = 4 // кол-во людей работающих в лесу
let cook_humans = 0 // кол-во поваров
works = [nowork_humans, forest_humans, cook_humans]

forest_multiplier = 1
cook_multiplier = 1

let logs = [] // логи (новые строки логов добавляются в конец списка)
let tiks = 0 // тики
let tiks_long = 10

function updateWindow(){ // функция обновления экрана

}

function time() {
    tiks += 1
    work_humans()
    console.log(logs)
    setTimeout(function(){
        time()
    }, tiks_long * 10000)
}
time()

function work_humans() {
    forest_humans_work()
    cook_humans_work()

    if (humans > fried_meat){
        let dead_humans = humans - fried_meat
        let all_dead_humans = dead_humans
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
        logs.push(`${all_dead_humans} человек погибло :(`)
    }

    if ((fried_meat > humans*2) && (humans < max_humans)){
        humans += 1
        nowork_humans += 1
        logs.push("у вас появился новый житель!")
    }
    fried_meat -= humans

}

class Monster {
    constructor(name, hp, damage, weapon, dead) {
        this.name = name
        this.hp = hp
        this.damage = damage
        this.weapon = weapon
        this.dead = dead
    }
}

function battle(monster) {
    setTimeout(function(){
        monster.hp -= 1 + inventory_items.wood_swords
        hp -= monster.damage
        if (hp <= 0) {
            for (let i = 0; i < menu.length; i += 1){
                menus[i].style.display = 'none'
            }
            village.style.display = 'flex'
            inventory_items.dead()
            logs.push("Вы потеряли все свои вещи спасаясь бегством...")
        }
        else if (monster.hp <= 0){
            for (let i = 0; i < menu.length; i += 1){
                menus[i].style.display = 'none'
            }
            village.style.display = 'flex'
            monster.dead()
        }
        else{
            battle(monster)
        }
    }, tiks_long * 1000)
}

//работы
function forest_humans_work(){
    wood += 0.5 * forest_humans * forest_multiplier
    meat += 0.4 * forest_humans * forest_multiplier
    logs.push(`ваши жители добыли ${Math.round(0.5 * forest_humans * forest_multiplier)} дерева`)
    logs.push(`ваши жители добыли ${Math.round(0.4 * forest_humans * forest_multiplier)} мяса`)
}
function cook_humans_work(){
    x = Math.min(cook_humans, Math.min(meat, wood))
    wood -= x
    meat -= x
    fried_meat += x * cook_multiplier
    logs.push(`ваши жители приготовили ${x * cook_multiplier} жаренного мяса`)
}

//иследования
go_forest.addEventListener('click', function() {
    if (Math.random() <= 0.3){
        wood += 1
        logs.push("Вы нашли одно дерево!")
    }
    if (Math.random() <= 0.2){
        meat += 1
        logs.push("Вы нашли одно мясо!")
    }
    if (Math.random() <= 0.1){
        meat += 1
        logs.push("Вы наткнулись на гоблина!")
        battle(new Monster("гоблин", 10, 5, "деревянный меч", function() {
            if ((Math.random() <= 0.01) && (open_locations < 2)){
                go_cave.style.display = 'flex'
                logs.push("Вы нашли карту ведущую в пещеру!")
            }
            if (Math.random() <= 0.1){
                wood_sword += 1
                logs.push("Вы нашли деревянный меч!")
            }
            if (Math.random() <= 0.6){
                meat += 10
                logs.push("Вы нашли десять мяса!")
            }
        }))
    }
})

//крафты
craft_hous.addEventListener('click', function() {
    if (wood >= 100){
        wood -= 100
        houses += 1
        max_humans += 4
        logs.push("Вы построиили ещё один дом!")
    }
})

craft_fried_meat.addEventListener('click', function() {
    if ((wood >= 2) && (meat >= 1)){
        wood -= 2
        meat -= 1
        fried_meat += 1
        logs.push("Вы приготовили ещё одно жаренное мясо!")
    }
})
craft_wood_sword.addEventListener('click', function() {
    if (wood >= 50){
        wood -= 50
        wood_sword += 1
        logs.push("Вы сделали деревянный меч!")
    }
})

//назначения и увольнения
go_human_work_in_forest.addEventListener('click', function() {
    if (nowork_humans > 0){
        nowork_humans -= 1
        forest_humans += 1
    }
    logs.push("Ещё один житель теперь работает в лесу!")
})
quit_human_work_in_forest.addEventListener('click', function() {
    if (forest_humans > 0){
        forest_humans -= 1
        nowork_humans += 1
    }
    logs.push("Ещё один житель теперь безработынй...")
})
go_human_work_cook.addEventListener('click', function() {
    if (nowork_humans > 0){
        nowork_humans -= 1
        cook_humans += 1
    }
    logs.push("Ещё один житель теперь работает поваром!")
})
quit_human_work_cook.addEventListener('click', function() {
    if (cook_humans > 0){
        cook_humans -= 1
        nowork_humans += 1
    }
    logs.push("Ещё один житель теперь безработынй...")
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

//упрваление инвентарём
input_fried_meat.addEventListener('click', function() {
    if ((fried_meat >= 1) && (inventory_free_slots >= 1)){
        fried_meat -= 1
        inventory_free_slots -= 1
        inventory_items.fried_meats += 1
    }
})
output_fried_meat.addEventListener('click', function() {
    if (inventory_items.fried_meats >= 1){
        fried_meat += 1
        inventory_free_slots += 1
        inventory_items.fried_meats -= 1
    }
})
input_wood_sword.addEventListener('click', function() {
    if ((wood_sword >= 1) && (inventory_free_slots >= 2)){
        wood_sword -= 1
        inventory_free_slots -= 2
        inventory_items.wood_swords += 1
    }
})
output_wood_sword.addEventListener('click', function() {
    if (inventory_items.wood_swords >= 1){
        wood_sword += 1
        inventory_free_slots += 2
        inventory_items.wood_swords -= 1
    }
})

//покупка
buy_cookbook_one.addEventListener('click', function() {
    if (meat >= 50){
        meat -= 50
        cook_humans_menu.style.display = 'flex'
        logs.push("Вы купили кулинарную книгу том 1!")
    }
})
buy_cookbook_two.addEventListener('click', function() {
    if (meat >= 100){
        meat -= 100
        cook_multiplier *= 2
        logs.push("Вы купили кулинарную книгу том 2!")
    }
})
buy_cookbook_three.addEventListener('click', function() {
    if (fried_meat >= 100){
        fried_meat -= 100
        cook_multiplier *= 2
        logs.push("Вы купили кулинарную книгу том 3!")
    }
})
buy_foresting_one.addEventListener('click', function() {
    if (wood >= 50){
        wood -= 50
        forest_multiplier *= 2
        logs.push("Вы купили лесничество том 1!")
    }
})
buy_foresting_two.addEventListener('click', function() {
    if (wood >= 100){
        wood -= 100
        forest_multiplier *= 2
        logs.push("Вы купили лесничество том 2!")
    }
})
buy_foresting_three.addEventListener('click', function() {
    if (wood >= 200){
        wood -= 200
        forest_multiplier *= 2
        logs.push("Вы купили лесничество том 3!")
    }
})

//действия во вребя боя
eat_fried_meat.addEventListener('click', function() {
    if (inventory_items.fried_meats >= 1){
        inventory_items.fried_meats -= 1
        hp += 40
        hp = Math.min(max_hp, hp)
        logs.push("Вы востановили 40 здоровья!")
    }
})