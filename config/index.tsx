import createConnectionPool, {sql, SQLQuery} from '@databases/pg';
export {sql, SQLQuery};

const db = createConnectionPool({bigIntMode: 'bigint'});

process.once('SIGTERM', () => {
  db.dispose().catch((ex) => {
    console.error(ex);
  });
});


export default db;