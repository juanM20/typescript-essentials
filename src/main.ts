
class User {

    protected _courseCount = 1
    readonly city: string = 'Mexico City'

    constructor(
        public name: string,
        public email: string,
    ){}

    private deleteToken(): void {
        console.log('delete token')
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1')
        }
        this._courseCount = courseNum
    }
}

class subUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4    
    }
}

const user = new User('John', 'john@example.com')
console.log(user.getAppleEmail)

const subUser1 = new subUser('Jane', 'jane@example.com')
subUser1.changeCourseCount()
console.log(subUser1.courseCount)