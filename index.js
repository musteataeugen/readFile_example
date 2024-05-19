//  conectam modulul pentru operare cu sistemul de fisiere
const fs = require("fs")
const data = fs.readFileSync("contactList.txt", "utf-8")
// console.log(data)

// doua variabile "imutabile" / constante de tip Array pentru a stoca datele
const phones = []
const emails = []

function loadContactsList() {
    parseContactsList()
    printContactsPhoneList()
    printContactsEmailList()
}

function parseContactsList() {
    let lines = data.split("\n")
    // console.log(lines)
    lines.forEach(value => {
        let parts = value.split(" ")
        // console.log(parts)
        for (let i = 0; i < parts.length; i++) {
            if (parts[i].includes("+")) {
                phones.push(parts[i])
            } else if (parts[i].includes("@")) {
                emails.push(parts[i])
            }
        }
    })
    // console.log(phones)
    // console.log(emails)
}

function printContactsPhoneList() {
    for (let i = 0; i < phones.length; i++) {
        console.log(phones[i])
    }
}

function printContactsEmailList() {
    for (let i = 0; i < emails.length; i++) {
        console.log(emails[i])
    }
}
loadContactsList()
// parseContactsList()
// printContactsPhoneList()
// printContactsEmailList()