var elementData = [
"1|H|Hydrogen|1.008|reactive-nonmetal|1|1",
"2|He|Helium|4.0026|noble-gas|1|18",
"3|Li|Lithium|6.94|alkali-metal|2|1",
"4|Be|Beryllium|9.0122|alkaline-earth-metal|2|2",
"5|B|Boron|10.81|metalloid|2|13",
"6|C|Carbon|12.011|reactive-nonmetal|2|14",
"7|N|Nitrogen|14.007|reactive-nonmetal|2|15",
"8|O|Oxygen|15.999|reactive-nonmetal|2|16",
"9|F|Fluorine|18.998|reactive-nonmetal|2|17",
"10|Ne|Neon|20.180|noble-gas|2|18",
"11|Na|Sodium|22.990|alkali-metal|3|1",
"12|Mg|Magnesium|24.305|alkaline-earth-metal|3|2",
"13|Al|Aluminium|26.982|post-transition-metal|3|13",
"14|Si|Silicon|28.085|metalloid|3|14",
"15|P|Phosphorus|30.974|reactive-nonmetal|3|15",
"16|S|Sulfur|32.06|reactive-nonmetal|3|16",
"17|Cl|Chlorine|35.45|reactive-nonmetal|3|17",
"18|Ar|Argon|39.948|noble-gas|3|18",
"19|K|Potassium|39.098|alkali-metal|4|1",
"20|Ca|Calcium|40.078|alkaline-earth-metal|4|2",
"21|Sc|Scandium|44.956|transition-metal|4|3",
"22|Ti|Titanium|47.867|transition-metal|4|4",
"23|V|Vanadium|50.942|transition-metal|4|5",
"24|Cr|Chromium|51.996|transition-metal|4|6",
"25|Mn|Manganese|54.938|transition-metal|4|7",
"26|Fe|Iron|55.845|transition-metal|4|8",
"27|Co|Cobalt|58.933|transition-metal|4|9",
"28|Ni|Nickel|58.693|transition-metal|4|10",
"29|Cu|Copper|63.546|transition-metal|4|11",
"30|Zn|Zinc|65.38|transition-metal|4|12",
"31|Ga|Gallium|69.723|post-transition-metal|4|13",
"32|Ge|Germanium|72.630|metalloid|4|14",
"33|As|Arsenic|74.922|metalloid|4|15",
"34|Se|Selenium|78.971|reactive-nonmetal|4|16",
"35|Br|Bromine|79.904|reactive-nonmetal|4|17",
"36|Kr|Krypton|83.798|noble-gas|4|18",
"37|Rb|Rubidium|85.468|alkali-metal|5|1",
"38|Sr|Strontium|87.62|alkaline-earth-metal|5|2",
"39|Y|Yttrium|88.906|transition-metal|5|3",
"40|Zr|Zirconium|91.224|transition-metal|5|4",
"41|Nb|Niobium|92.906|transition-metal|5|5",
"42|Mo|Molybdenum|95.95|transition-metal|5|6",
"43|Tc|Technetium|98|transition-metal|5|7",
"44|Ru|Ruthenium|101.07|transition-metal|5|8",
"45|Rh|Rhodium|102.91|transition-metal|5|9",
"46|Pd|Palladium|106.42|transition-metal|5|10",
"47|Ag|Silver|107.87|transition-metal|5|11",
"48|Cd|Cadmium|112.41|transition-metal|5|12",
"49|In|Indium|114.82|post-transition-metal|5|13",
"50|Sn|Tin|118.71|post-transition-metal|5|14",
"51|Sb|Antimony|121.76|metalloid|5|15",
"52|Te|Tellurium|127.60|metalloid|5|16",
"53|I|Iodine|126.90|reactive-nonmetal|5|17",
"54|Xe|Xenon|131.29|noble-gas|5|18",
"55|Cs|Cesium|132.91|alkali-metal|6|1",
"56|Ba|Barium|137.33|alkaline-earth-metal|6|2",
"57|La|Lanthanum|138.91|lanthanide|8|3",
"58|Ce|Cerium|140.12|lanthanide|8|4",
"59|Pr|Praseodymium|140.91|lanthanide|8|5",
"60|Nd|Neodymium|144.24|lanthanide|8|6",
"61|Pm|Promethium|145|lanthanide|8|7",
"62|Sm|Samarium|150.36|lanthanide|8|8",
"63|Eu|Europium|151.96|lanthanide|8|9",
"64|Gd|Gadolinium|157.25|lanthanide|8|10",
"65|Tb|Terbium|158.93|lanthanide|8|11",
"66|Dy|Dysprosium|162.50|lanthanide|8|12",
"67|Ho|Holmium|164.93|lanthanide|8|13",
"68|Er|Erbium|167.26|lanthanide|8|14",
"69|Tm|Thulium|168.93|lanthanide|8|15",
"70|Yb|Ytterbium|173.05|lanthanide|8|16",
"71|Lu|Lutetium|174.97|lanthanide|8|17",
"72|Hf|Hafnium|178.49|transition-metal|6|4",
"73|Ta|Tantalum|180.95|transition-metal|6|5",
"74|W|Tungsten|183.84|transition-metal|6|6",
"75|Re|Rhenium|186.21|transition-metal|6|7",
"76|Os|Osmium|190.23|transition-metal|6|8",
"77|Ir|Iridium|192.22|transition-metal|6|9",
"78|Pt|Platinum|195.08|transition-metal|6|10",
"79|Au|Gold|196.97|transition-metal|6|11",
"80|Hg|Mercury|200.59|transition-metal|6|12",
"81|Tl|Thallium|204.38|post-transition-metal|6|13",
"82|Pb|Lead|207.2|post-transition-metal|6|14",
"83|Bi|Bismuth|208.98|post-transition-metal|6|15",
"84|Po|Polonium|209|post-transition-metal|6|16",
"85|At|Astatine|210|metalloid|6|17",
"86|Rn|Radon|222|noble-gas|6|18",
"87|Fr|Francium|223|alkali-metal|7|1",
"88|Ra|Radium|226|alkaline-earth-metal|7|2",
"89|Ac|Actinium|227|actinide|9|3",
"90|Th|Thorium|232.04|actinide|9|4",
"91|Pa|Protactinium|231.04|actinide|9|5",
"92|U|Uranium|238.03|actinide|9|6",
"93|Np|Neptunium|237|actinide|9|7",
"94|Pu|Plutonium|244|actinide|9|8",
"95|Am|Americium|243|actinide|9|9",
"96|Cm|Curium|247|actinide|9|10",
"97|Bk|Berkelium|247|actinide|9|11",
"98|Cf|Californium|251|actinide|9|12",
"99|Es|Einsteinium|252|actinide|9|13",
"100|Fm|Fermium|257|actinide|9|14",
"101|Md|Mendelevium|258|actinide|9|15",
"102|No|Nobelium|259|actinide|9|16",
"103|Lr|Lawrencium|266|actinide|9|17",
"104|Rf|Rutherfordium|267|transition-metal|7|4",
"105|Db|Dubnium|268|transition-metal|7|5",
"106|Sg|Seaborgium|269|transition-metal|7|6",
"107|Bh|Bohrium|270|transition-metal|7|7",
"108|Hs|Hassium|277|transition-metal|7|8",
"109|Mt|Meitnerium|278|unknown|7|9",
"110|Ds|Darmstadtium|281|unknown|7|10",
"111|Rg|Roentgenium|282|unknown|7|11",
"112|Cn|Copernicium|285|transition-metal|7|12",
"113|Nh|Nihonium|286|unknown|7|13",
"114|Fl|Flerovium|289|unknown|7|14",
"115|Mc|Moscovium|290|unknown|7|15",
"116|Lv|Livermorium|293|unknown|7|16",
"117|Ts|Tennessine|294|unknown|7|17",
"118|Og|Oganesson|294|unknown|7|18"
];
var table = document.getElementById("periodicTable");

var selectedElement = null;
var elementButtons = [];
var currentCategory = "all";

// Create all 118 elements

elementData.forEach(function(item) {

    var parts = item.split("|");

    var number = parts[0];
    var symbol = parts[1];
    var name = parts[2];
    var mass = parts[3];
    var category = parts[4];
    var period = parts[5];
    var group = parts[6];

    var button = document.createElement("button");

    button.className = "element " + category;

    button.style.gridRow = period;
    button.style.gridColumn = group;

    button.innerHTML =
        '<span class="number">' + number + '</span>' +
        '<span class="symbol">' + symbol + '</span>' +
        '<span class="name">' + name + '</span>';
button.onmouseenter = function() {
    showDetails(number, symbol, name, mass, category, button);
};

var tableArea = document.querySelector(".table-area");

tableArea.onmouseleave = function() {
    hideDetails();
};
button.onfocus = function() {
    showDetails(number, symbol, name, mass, category, button);
};

button.onblur = function() {
    hideDetails();
};

    table.appendChild(button);

    elementButtons.push({
        button: button,
        number: number,
        symbol: symbol,
        name: name,
        mass: mass,
        category: category
    });

});
function addPlaceholder(symbol, name, row) {
    var box = document.createElement("div");

    box.className = "placeholder-box";
    box.style.gridRow = row;
    box.style.gridColumn = 3;

    box.innerHTML = `
        <h2>${symbol}</h2>
        <p>${name}</p>
    `;

    table.appendChild(box);
}

addPlaceholder("*", "", 6);
addPlaceholder("**", "", 7);

// Search

document.getElementById("searchInput").oninput = function() {
    filterElements();
};


// Category Filter

function filterCategory(category, clickedButton) {

    currentCategory = category;

    var filterButtons = document.getElementsByClassName("filter-btn");

    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].classList.remove("active");
    }

    clickedButton.classList.add("active");

    filterElements();
}


// Search + Category Filter

function filterElements() {

    var searchText = document.getElementById("searchInput").value.toLowerCase();

    var count = 0;

    elementButtons.forEach(function(item) {

        var matchesSearch =
            item.name.toLowerCase().includes(searchText) ||
            item.symbol.toLowerCase().includes(searchText) ||
            item.number == searchText;

        var matchesCategory =
            currentCategory == "all" ||
            item.category == currentCategory;

        if (matchesSearch && matchesCategory) {

            item.button.classList.remove("hidden");
            count++;

        } else {

            item.button.classList.add("hidden");

        }

    });

    document.getElementById("resultCount").innerHTML =
        count + (count == 1 ? " element found" : " elements found");
}
function showDetails(number, symbol, name, mass, category, button) {

    var panel = document.getElementById("detailsPanel");

    panel.style.display = "block";

    document.getElementById("detailNumber").innerHTML =
        "ATOMIC NO. " + number;

    document.getElementById("detailSymbol").innerHTML = symbol;
    document.getElementById("detailName").innerHTML = name;

    document.getElementById("detailMass").innerHTML =
        "Atomic mass: " + mass;

    document.getElementById("infoNumber").innerHTML = number;
    document.getElementById("infoMass").innerHTML = mass;

    document.getElementById("infoCategory").innerHTML =
        category.replace(/-/g, " ");

    document.getElementById("detailCategory").innerHTML =
        category.replace(/-/g, " ").toUpperCase();
}

function hideDetails() {
    document.getElementById("detailsPanel").style.display = "none";
}

function closeDetails() {
    hideDetails();
}