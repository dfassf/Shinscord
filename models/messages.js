const Sequelize = require('sequelize');
const moment = require('moment');


/*
채팅
보낸 사람
받은 사람
메시지 내용
보낸 시간



수신 여부(생각해볼 필요)
*/
module.exports = class Messages extends Sequelize.Model{
    static init(sequelize){
        return super.init({ 
            sentfrom:{ 
                type:Sequelize.STRING(50),
                allowNull:false,
            },
            sentto:{ 
                type:Sequelize.TEXT,
                allowNull : false,
            },
            content:{ 
                type:Sequelize.TEXT,
                allowNull : false,
            },
            sentwhen:{
                type:Sequelize.DATEONLY,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            },
            ifread: { 
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Messages',
            tableName:'messages',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    };
};
