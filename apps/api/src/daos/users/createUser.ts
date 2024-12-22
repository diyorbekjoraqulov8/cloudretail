import { DbClient, getRow } from '../../pool';
import { sql } from '@ts-safeql/sql-tag';

type createUserPropsType = {
  username: string;
  password: string;
};

export const createUser = async (
  client: DbClient,
  values: createUserPropsType,
) => {
  return await getRow(
    client.query<{
      id: number;
      username: string;
      password: string;
    }>(
      sql`
                insert into users (username, password)
                values (${values.username}, ${values.password})
                returning *
            `,
    ),
  );
};
