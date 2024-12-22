import crypto from 'node:crypto';
import { DbClient } from './pool';
import * as userDao from './daos/users';
import { ADMIN_PASSWORD, ADMIN_USERNAME } from './constants';
import { NoRecordsFound } from './exceptions';

export const seed = async (client: DbClient) => {
  try {
    const admin: any = await userDao.selectByUsername(client, {
      username: ADMIN_USERNAME,
    });

    console.log('admin find: ', admin);
  } catch (error) {
    if (error instanceof NoRecordsFound) {
      await userDao.createUser(client, {
        username: ADMIN_USERNAME,
        password: crypto.hash('sha256', ADMIN_PASSWORD),
      });
      console.info('Admin user created!');
    }
  }

  console.info('Seed complete!');
};
