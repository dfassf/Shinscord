const Sequelize = require('sequelize');
const moment = require('moment');


/*
서버명0
서버 생성일0
역할 부여
역할에 따른 권한
차단

카테고리
카테고리 권한
채널
채널 권한

생각해야할 것: 채널이나 카테고리 순서 변경
*/
module.exports = class Server extends Sequelize.Model{
    static init(sequelize){
        return super.init({ 
            servername:{ 
                type:Sequelize.STRING(50),
                allowNull:false,
            },
            roles:{ 
                type:Sequelize.TEXT,
                allowNull : true,
                defaultValue:"",
            },
            banneduser:{ 
                type:Sequelize.TEXT,
                allowNull : true,
                defaultValue:"",
            },
            category:{ 
                type:Sequelize.TEXT,
                allowNull:true,
                defaultValue:"",
            },
            channel:{ 
                type:Sequelize.TEXT,
                allowNull:true,
                defaultValue:"",
            },
            logo:{
                type:Sequelize.STRING(100),
                allowNull:true,
                defaultValue:"",
            },
            createdwhen:{
                type:Sequelize.DATEONLY,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            },
            serverdomain:{
                type:Sequelize.STRING(100),
                allowNull:false,
                unique:true,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Server',
            tableName:'servers',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    };
};
