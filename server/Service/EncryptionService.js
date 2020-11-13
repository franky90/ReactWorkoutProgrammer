import { genSalt, hash, compare } from 'bcryptjs'

function Encryption() 
{
    /**
     * Function that will encrypt data such as a password
     * @param {string} plainTextString 
     * @return Promise<string>
     */
    const hashString = async (plainTextString) => {
        const salt = await genSalt(10);
        return await hash(plainTextString, salt)
    }


    /**
     * Function that will confirm if password is correct
     * @param {string} plainPassword 
     * @param {string} encryptedPassword 
     * @return Promise<boolean>, if callback has been omitted
     */
    const verifyEncryptedPassword = async (plainPassword, encryptedPassword) =>
    {
        const isMatch = await compare(plainPassword, encryptedPassword)
        return isMatch
    }

    return {
        hashString,
        verifyEncryptedPassword
    }
}

export default Encryption()