import { DbClient, getRow } from '../../pool';
import { sql } from '@ts-safeql/sql-tag';

type selectPropsType = {
  username: string;
};

export const selectByUsername = async (
  client: DbClient,
  { username }: selectPropsType,
): Promise<any> => {
  return getRow(
    client.query(
      sql`
                select * from users where username = ${username}
            `,
    ),
  );
};
