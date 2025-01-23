class Validate {

    string(data) {
        const typeString = (str) => typeof str === 'string' ? true : false
        if (Array.isArray(data)) {
            data.forEach(element => {
                if (!typeString(element)) {
                    return false
                } else {
                    return true
                }
            })
        } else {
            if (!typeString(data)) {
                return false
            } else {
                return true
            }
        }
    }

    number(data) {
        const typeNumber = (num) => typeof num === 'number' ? true : false

        if (Array.isArray(data)) {
            data.forEach(element => {
                if (!typeNumber(element)) {
                    return false
                } else {
                    return true
                }
            })
        } else {
            if (!typeNumber(data)) {
                return false
            } else {
                return true
            }
        }
    }

    required(data) {
        if (Array.isArray(data)) {
            data.forEach((element, index) => {
                if (!element && element !== 0) {
                    return false
                } else {
                    return true
                }
            })
        } else {
            if (!data && data !== 0) {
                return false
            } else {
                return true
            }
        }
    }

    email(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return false
        } else {
            return true
        }
    }

    isMongoId(data) {
        const regex = /^[0-9a-fA-F]{24}$/
        const is_MongoId = (id2) => regex.test(id2)

        if (Array.isArray(data)) {
            data.forEach((element, index) => {
                if (!is_MongoId(element)) {
                    return false
                } else {
                    return true
                }
            })
        } else {
            if (!is_MongoId(data)) {
                return false
            } else {
                return true
            }
        }
    }

    objectEmpty(obj){
        return !Object.keys(obj).length > 0
    }
}


export const validate = new Validate