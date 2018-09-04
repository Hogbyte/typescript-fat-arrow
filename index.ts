import { Observable, from } from "rxjs";
import { filter, map } from "rxjs/operators";

// SETUP SECTION:

interface IUser {
    gamerTag: string;
    realName: string;
}

const USERS: IUser[] = [
    { gamerTag: "BrianD", realName: "Brian Doheny" },
    { gamerTag: "The Law", realName: "Lawrence Pemberton" },
    { gamerTag: "Jenny Matrix", realName: "Jennifer Matthews" }
];

// EXAMPLE PREMIS:
// 1 - Filter out users that have a space in their gamer tag
// 2 - Get the user's real name
// 3 - Convert the user's real name to uppercase letters
// 4 - Write the result to the JavaScript console

// EXAMPLE 1 - Simple (no types)
console.log("\nEXAMPLE 1 - Simple (no types)");

let example1Users$: Observable<IUser> = from(USERS);
example1Users$.pipe(
    filter(user => user.gamerTag.indexOf(" ") > 0),
    map(user => user.realName),
    map(user => user.toUpperCase())
).subscribe(
    user => console.log(user)
);

// EXAMPLE 2 - Intermediate (parameter types but not function types)
console.log("\nEXAMPLE 2 - Intermediate (parameter types but not function types)");

let example2Users$: Observable<IUser> = from(USERS);
example2Users$.pipe(
    filter((user: IUser) => user.gamerTag.indexOf(" ") > 0),
    map((user: IUser) => user.realName),
    map((user: string) => user.toUpperCase())
).subscribe(
    (user: string) => console.log(user)
);

// EXAMPLE 3 - Advanced (parameter types and function types)
console.log("\nEXAMPLE 3 - Advanced (parameter types and function types)");

let example3Users$: Observable<IUser> = from(USERS);
example3Users$.pipe(
    filter((user: IUser): boolean => user.gamerTag.indexOf(" ") > 0),
    map((user: IUser): string => user.realName),
    map((user: string): string => user.toUpperCase())
).subscribe(
    (user: string): void => console.log(user)
);

// EXAMPLE 4 - Old school v1 (inline function declarations, no types)
console.log("\nEXAMPLE 4 - Old school v1 (inline function declarations, no types)")

let example4Users$: Observable<IUser> = from(USERS);
example4Users$.pipe(
    filter(function(user) { return user.gamerTag.indexOf(" ") > 0; }),
    map(function(user) { return user.realName; }),
    map(function(user) { return user.toUpperCase(); })
).subscribe(
    function(user) { console.log(user); }
);

// EXAMPLE 5 - Old school v2 (calling named functions, with types)
console.log("\nEXAMPLE 5 - Old school v2 (calling named functions, with types)");

function hasSpace(user: IUser): boolean {
    return user.gamerTag.indexOf(" ") > 0;
}

function getRealName(user: IUser): string {
    return user.realName;
}

function capitalize(user: string): string {
    return user.toUpperCase();
}

function writeOutput(user: string): void {
    console.log(user);
}

let example5Users$: Observable<IUser> = from(USERS);
example5Users$.pipe(
    filter(hasSpace),
    map(getRealName),
    map(capitalize)
).subscribe(writeOutput);