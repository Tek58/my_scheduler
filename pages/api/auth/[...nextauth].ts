import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'

const prisma = new PrismaClient()

const configuration = {
  providers: [
    Providers.Credentials({
      name: 'credentials',
      credentials: {
        Email: {
          type: 'text',
          placeholder: 'Email',
        },
        Password: {
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.Email,
            password: credentials.Password,
          },
        })

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    jwt: true,
  },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, configuration)
