const dbRun = require('./model.js')

// initialize db tables
const mkdb = () => {
  [['drop table if exists block cascade', []],
   [`create table block (
       echo_id serial primary key,
       raw varchar(3000) not null,
       previous varchar(200) default '',
       timestamp varchar(100) default '',
       transaction_mroot varchar(200) default '',
       action_mroot varchar(200) default '',
       block_mroot varchar(200) default '',
       producer varchar(100) default '',
       schedule_version integer,
       new_producers varchar(100) default '',
       producer_signature varchar(100) default '',
       id varchar(200) default '',
       block_num integer default -1,
       ref_block_prefix integer default -1
     )`, []]]
    .forEach(async (v) => {
      await dbRun(v).then(res => console.log(res))
    })
}

mkdb()
// input_transactions: []
//  "regions": [
//     {
//       "region": 0,
//       "cycles_summary": [
//         [
//           {
//             "read_locks": [],
//             "write_locks": [],
//             "transactions": [
//               {
//                 "status": "executed",
//                 "kcpu_usage": 2,
//                 "net_usage_words": 38,
//                 "id": "57425d8587c272ae220aad887efee00c9314b01cefad00c39085e53d09c3732c"
//               }
//             ]
//           }
//         ]
//       ]
//     }
//   ],
