import NextAuth from 'next-auth'

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token)
}

export default NextAuth({
  providers: [
    Providers.token({
      nameId: process.env.TOKEN_ID,


    })
  ]
})