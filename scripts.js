let logs_menu = document.querySelectorAll(".logs")
let logs_length = 24

let village = document.querySelector(".village") // div деревни
let inventory = document.querySelector(".inventory") // div инвентаря
let market = document.querySelector(".market") // div рынка
let environment = document.querySelector(".environment") // div окружения
let battle_screen = document.querySelector(".battle_screen") // div экрана битвы
let menus = [village,inventory,market,environment,battle_screen]

let vilage_valume = document.querySelector(".vilage_valume")
let non_work_humans = document.querySelector(".non_work_humans")
let houseshtml = document.querySelector(".houses")
let forest_humanshtml = document.querySelector(".forest_humans")
let cook_humanshtml = document.querySelector(".cook_humans")

let buttons_zones = document.querySelector(".buttons_zones")


let meathtml = document.querySelector(".meat")
let fried_meathtml = document.querySelector(".fried_meat")
let woodhtml = document.querySelector(".wood")
let wood_swordhtml = document.querySelector(".wood_swords")

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

let cookbook_one = document.querySelector(".cookbook_one")
let cookbook_two = document.querySelector(".cookbook_two")
let cookbook_three = document.querySelector(".cookbook_three")
let foresting_one = document.querySelector(".foresting_one")
let foresting_two = document.querySelector(".foresting_two")
let foresting_three = document.querySelector(".foresting_three")

let go_forest = document.querySelector(".go_forest") // кнопка исследовать лес
let go_cave = document.querySelector(".go_cave") // кнопка исследовать лес

let fried_meat_inventory = document.querySelector(".fried_meat_inventory")
let wood_swords_inventory = document.querySelector(".wood_swords_inventory")

let slots = document.querySelector(".slots")

let bad_name = document.querySelector(".bad_name")
let bad_hp = document.querySelector(".bad_hp")
let bad_name_weapon = document.querySelector(".bad_name_weapon")

let hphtml = document.querySelector(".health")

let hero_hp = document.querySelector(".hero_hp")
let batle_fried_meat_inventory = document.querySelector(".batle_fried_meat_inventory")
let batle_wood_swords_inventory = document.querySelector(".batle_wood_swords_inventory")
let eat_fried_meat = document.querySelector(".eat_fried_meat")


let max_hp = 50 // максимальное здоровье игрока
let hp = 50 // здоровье игрока
let humans = 2 // кол-во жителей
let max_humans = 4 // макс. кол-во жителей
let houses = 1 // кол-во домов
let meat = 10 // кол-во мяса //10
let fried_meat = 10 // кол-во жаренного мяса //10
let wood = 10 // кол-во дерева //10
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
let forest_humans = 2 // кол-во людей работающих в лесу
let cook_humans = 0 // кол-во поваров
let works = [nowork_humans, forest_humans, cook_humans]

let open_locations = 1

let forest_multiplier = 1
let cook_multiplier = 1

let logs = ['...','...','...','...','...','...','...','...','...','...','...','...','...','...','...','...','...','...','...','...','...','...','...','...'] // логи (новые строки логов добавляются в конец списка)
let tiks = 0 // тики
let tiks_long = 10

function updateLogs(){
    for (let i = 0; i < logs_length; i += 1){
        logs_menu[i].innerHTML = logs[logs.length - 1 - i]
    }
}

function updateWindow(){ // функция обновления экрана
    vilage_valume.innerHTML = `${humans}/${max_humans}`
    non_work_humans.innerHTML = `${nowork_humans}`
    houseshtml.innerHTML = `${houses}`
    forest_humanshtml.innerHTML = `${forest_humans}`
    cook_humanshtml.innerHTML = `${cook_humans}`
    meathtml.innerHTML = `${Math.floor(meat)}`
    fried_meathtml.innerHTML = `${Math.floor(fried_meat)}`
    woodhtml.innerHTML = `${Math.floor(wood)}`
    wood_swordhtml.innerHTML = `${wood_sword}`
    hphtml.innerHTML = `${hp}/${max_hp}`
    fried_meat_inventory.innerHTML = `${inventory_items.fried_meats}`
    wood_swords_inventory.innerHTML = `${inventory_items.wood_swords}`
    slots.innerHTML = `${inventory_free_slots}/${inventory_max_slots}`
}

function time() {
    tiks += 1
    work_humans()
    updateWindow()
    console.log(logs)
    console.log(works)
    setTimeout(function(){
        time()
    }, tiks_long * 1000)
}
time()

function work_humans() {
    forest_humans_work()
    cook_humans_work()
    works = [nowork_humans, forest_humans, cook_humans]
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
        works[0] += 1
        logs.push("у вас появился новый житель!")
    }
    updateLogs()
    nowork_humans = works[0]
    forest_humans = works[1]
    cook_humans = works[2]
    fried_meat -= humans

}

bad_name.innerHTML = "гоблин"
bad_name_weapon.innerHTML = "деревянный меч"
monster_hp = 10

function battle() {
    bad_hp.innerHTML = `${monster_hp}/${10}`
    hero_hp.innerHTML = `${hp}/${max_hp}`
    batle_fried_meat_inventory.innerHTML = `${inventory_items.fried_meats}`
    batle_wood_swords_inventory.innerHTML = `${inventory_items.wood_swords}`
    setTimeout(function(){
        monster_hp -= 1 + inventory_items.wood_swords
        hp -= 5
        if (hp <= 0) {
            for (let i = 0; i < menus.length; i += 1){
                menus[i].style.display = 'none'
            }
            village.style.display = 'flex'
            buttons_zones.style.display = 'block'
            inventory_items.dead()
            fried_meat_inventory.innerHTML = `${inventory_items.fried_meats}`
            wood_swords_inventory.innerHTML = `${inventory_items.wood_swords}`
            monster_hp = 10
            hp = max_hp
            inventory_free_slots = 20
            logs.push("Вы потеряли все свои вещи спасаясь бегством...")
            updateLogs()
        }
        else if (monster_hp <= 0){
            for (let i = 0; i < menus.length; i += 1){
                menus[i].style.display = 'none'
            }
            village.style.display = 'flex'
            buttons_zones.style.display = 'block'
            if ((Math.random() <= 0.01) && (open_locations < 2)){
                go_cave.style.display = 'flex'
                open_locations = 2
                logs.push("Вы нашли карту ведущую в пещеру!")
            }
            if (Math.random() <= 0.1){
                wood_sword += 1
                logs.push("Вы нашли деревянный меч!")
                wood_swordhtml.innerHTML = `${wood_sword}`
            }
            if (Math.random() <= 0.6){
                meat += 5
                logs.push("Вы нашли 5 мяса!")
                meathtml.innerHTML = `${Math.floor(meat)}`
            }
            updateLogs()
            monster_hp = 10
        }
        else{
            battle()
        }
    }, 1000)
}


//работы
function forest_humans_work(){
    wood += 0.5 * forest_humans * forest_multiplier
    meat += 0.4 * forest_humans * forest_multiplier
    if (Math.round(0.5 * forest_humans * forest_multiplier) > 0){
        logs.push(`ваши жители добыли ${Math.round(0.5 * forest_humans * forest_multiplier)} дерева`)
    }
    if (Math.round(0.4 * forest_humans * forest_multiplier) > 0){
        logs.push(`ваши жители добыли ${Math.round(0.4 * forest_humans * forest_multiplier)} мяса`)
    }
    updateLogs()
}
function cook_humans_work(){
    x = Math.min(cook_humans, Math.min(meat, wood))
    wood -= x
    meat -= x
    fried_meat += x * cook_multiplier
    if (x * cook_multiplier > 0){
    logs.push(`ваши жители приготовили ${Math.round(x * cook_multiplier)} жаренного мяса`)
    }
    updateLogs()
}

//иследования
go_forest.addEventListener('click', function() {
    if (Math.random() <= 0.8){
        wood += 1
        logs.push("Вы нашли одно дерево!")
        woodhtml.innerHTML = `${Math.floor(wood)}`
    }
    if (Math.random() <= 0.1){
        meat += 1
        logs.push("Вы нашли одно мясо!")
        meathtml.innerHTML = `${Math.floor(meat)}`
    }
    if (Math.random() <= 0.15){
        logs.push("Вы наткнулись на гоблина!")
        updateLogs()
        for (let i = 0; i < menus.length; i += 1){
            menus[i].style.display = 'none'
        }
        buttons_zones.style.display = 'none'
        battle_screen.style.display = 'flex'
        battle()
    }
    updateLogs()
})

go_cave.addEventListener('click', function() {
    logs.push("Вы ничего не нашли...")
    updateLogs()
})

//крафты
craft_hous.addEventListener('click', function() {
    if (wood >= 100){
        wood -= 100
        houses += 1
        max_humans += 4
        vilage_valume.innerHTML = `${humans}/${max_humans}`
        houseshtml.innerHTML = `${houses}`
        woodhtml.innerHTML = `${Math.floor(wood)}`
        logs.push("Вы построиили дом!")
        updateLogs()
    }
})

craft_fried_meat.addEventListener('click', function() {
    if ((wood >= 2) && (meat >= 1)){
        wood -= 2
        meat -= 1
        fried_meat += 1
        meathtml.innerHTML = `${Math.floor(meat)}`
        fried_meathtml.innerHTML = `${Math.floor(fried_meat)}`
        woodhtml.innerHTML = `${Math.floor(wood)}`
        logs.push("Вы приготовили жаренное мясо!")
        updateLogs()
    }
})
craft_wood_sword.addEventListener('click', function() {
    if (wood >= 50){
        wood -= 50
        wood_sword += 1
        woodhtml.innerHTML = `${Math.floor(wood)}`
        wood_swordhtml.innerHTML = `${wood_sword}`
        logs.push("Вы сделали деревянный меч!")
        updateLogs()
    }
})

//назначения и увольнения

go_human_work_in_forest.addEventListener('click', function() {
    if (nowork_humans > 0){
        nowork_humans -= 1
        forest_humans += 1
    }
    logs.push("Ещё один житель теперь работает в лесу!")
    non_work_humans.innerHTML = `${nowork_humans}`
    forest_humanshtml.innerHTML = `${forest_humans}`
    updateLogs()
})
quit_human_work_in_forest.addEventListener('click', function() {
    if (forest_humans > 0){
        forest_humans -= 1
        nowork_humans += 1
    }
    logs.push("Ещё один житель теперь безработынй...")
    non_work_humans.innerHTML = `${nowork_humans}`
    forest_humanshtml.innerHTML = `${forest_humans}`
    updateLogs()
})
go_human_work_cook.addEventListener('click', function() {
    if (nowork_humans > 0){
        nowork_humans -= 1
        cook_humans += 1
    }
    logs.push("Ещё один житель теперь работает поваром!")
    non_work_humans.innerHTML = `${nowork_humans}`
    cook_humanshtml.innerHTML = `${cook_humans}`
    updateLogs()
})
quit_human_work_cook.addEventListener('click', function() {
    if (cook_humans > 0){
        cook_humans -= 1
        nowork_humans += 1
    }
    logs.push("Ещё один житель теперь безработынй...")
    non_work_humans.innerHTML = `${nowork_humans}`
    cook_humanshtml.innerHTML = `${cook_humans}`
    updateLogs()
})

//меню
btn_go_village.addEventListener('click', function() {
    for (let i = 0; i < menus.length; i += 1){
        menus[i].style.display = 'none'
    }
    village.style.display = 'flex'
})
btn_go_inventory.addEventListener('click', function() {
    for (let i = 0; i < menus.length; i += 1){
        menus[i].style.display = 'none'
    }
    inventory.style.display = 'flex'
})
btn_go_market.addEventListener('click', function() {
    for (let i = 0; i < menus.length; i += 1){
        menus[i].style.display = 'none'
    }
    market.style.display = 'flex'
})
btn_go_environment.addEventListener('click', function() {
    for (let i = 0; i < menus.length; i += 1){
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
        fried_meat_inventory.innerHTML = `${inventory_items.fried_meats}`
        slots.innerHTML = `${inventory_free_slots}/${inventory_max_slots}`
        fried_meathtml.innerHTML = `${fried_meat}`
    }
})
output_fried_meat.addEventListener('click', function() {
    if (inventory_items.fried_meats >= 1){
        fried_meat += 1
        inventory_free_slots += 1
        inventory_items.fried_meats -= 1
        fried_meat_inventory.innerHTML = `${inventory_items.fried_meats}`
        slots.innerHTML = `${inventory_free_slots}/${inventory_max_slots}`
        fried_meathtml.innerHTML = `${fried_meat}`
    }
})
input_wood_sword.addEventListener('click', function() {
    if ((wood_sword >= 1) && (inventory_free_slots >= 2)){
        wood_sword -= 1
        inventory_free_slots -= 2
        inventory_items.wood_swords += 1
        wood_swords_inventory.innerHTML = `${inventory_items.wood_swords}`
        slots.innerHTML = `${inventory_free_slots}/${inventory_max_slots}`
        wood_swordhtml.innerHTML = `${wood_sword}`
    }
})
output_wood_sword.addEventListener('click', function() {
    if (inventory_items.wood_swords >= 1){
        wood_sword += 1
        inventory_free_slots += 2
        inventory_items.wood_swords -= 1
        wood_swords_inventory.innerHTML = `${inventory_items.wood_swords}`
        slots.innerHTML = `${inventory_free_slots}/${inventory_max_slots}`
        wood_swordhtml.innerHTML = `${wood_sword}`
    }
})

//покупка
buy_cookbook_one.addEventListener('click', function() {
    if (meat >= 50){
        meat -= 50
        cook_humans_menu.style.display = 'block'
        cookbook_one.style.display = 'none'
        cookbook_two.style.display = 'block'
        meathtml.innerHTML = `${Math.floor(meat)}`
        logs.push("Вы купили кулинарную книгу том 1!")
        updateLogs()
    }
})
buy_cookbook_two.addEventListener('click', function() {
    if (meat >= 100){
        meat -= 100
        cook_multiplier *= 2
        cookbook_two.style.display = 'none'
        cookbook_three.style.display = 'block'
        meathtml.innerHTML = `${Math.floor(meat)}`
        logs.push("Вы купили кулинарную книгу том 2!")
        updateLogs()
    }
})
buy_cookbook_three.addEventListener('click', function() {
    if (fried_meat >= 100){
        fried_meat -= 100
        cook_multiplier *= 2
        cookbook_three.style.display = 'none'
        fried_meathtml.innerHTML = `${Math.floor(fried_meat)}`
        logs.push("Вы купили кулинарную книгу том 3!")
        updateLogs()
    }
})
buy_foresting_one.addEventListener('click', function() {
    if (wood >= 50){
        wood -= 50
        forest_multiplier *= 2
        foresting_one.style.display = 'none'
        foresting_two.style.display = 'block'
        woodhtml.innerHTML = `${Math.floor(wood)}`
        logs.push("Вы купили лесничество том 1!")
        updateLogs()
    }
})
buy_foresting_two.addEventListener('click', function() {
    if (wood >= 100){
        wood -= 100
        forest_multiplier *= 2
        foresting_two.style.display = 'none'
        foresting_three.style.display = 'block'
        woodhtml.innerHTML = `${Math.floor(wood)}`
        logs.push("Вы купили лесничество том 2!")
        updateLogs()
    }
})
buy_foresting_three.addEventListener('click', function() {
    if (wood >= 200){
        wood -= 200
        forest_multiplier *= 2
        foresting_three.style.display = 'none'
        woodhtml.innerHTML = `${Math.floor(wood)}`
        logs.push("Вы купили лесничество том 3!")
        updateLogs()
    }
})

//действия во вребя боя
eat_fried_meat.addEventListener('click', function() {
    if (inventory_items.fried_meats >= 1){
        inventory_items.fried_meats -= 1
        inventory_free_slots += 1
        hp += 40
        hp = Math.min(max_hp, hp)
        hero_hp.innerHTML = `${hp}/${max_hp}`
        batle_fried_meat_inventory.innerHTML = `${inventory_items.fried_meats}`
        fried_meat_inventory.innerHTML = `${inventory_items.fried_meats}`
        logs.push("Вы востановили 40 здоровья!")
        updateLogs()
    }
})