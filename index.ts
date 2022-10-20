import * as dotenv from 'dotenv';
dotenv.config();

import { createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';

(async () => {
    await createAgent({
        authSecret: process.env.FOREST_AUTH_SECRET,
        envSecret: process.env.FOREST_ENV_SECRET,
        isProduction: process.env.NODE_ENV === 'production',
        forestServerUrl: process.env.FOREST_URL,
    })
        .addDataSource(createSqlDataSource(process.env.DATABASE_URL))
        .mountOnStandaloneServer(Number(process.env.PORT) || 3310)
        .start();
})();
