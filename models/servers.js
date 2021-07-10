const Sequelize = require('sequelize');
const moment = require('moment');


/*
서버명
서버 생성일
역할 부여
역할에 따른 권한

카테고리
카테고리 권한
채널
채널 권한

생각해야할 것: 채널이나 카테고리 순서 변경
*/
module.exports = class Server extends Sequelize.Model{
    static init(sequelize){
        return super.init({ 
            useremail:{ //필수
                type:Sequelize.STRING(50),
                allowNull:false,
                unique:true,
            },
            username:{ //필수
                type:Sequelize.STRING(50),
                allowNull : false,
            },
            password:{ //필수
                type:Sequelize.STRING(100),
                allowNull : false,
            },
            birthday:{ //필수
                type:Sequelize.STRING(8),
                allowNull:false,
            },
            servers:{ //가입서버(추후 변경 예정이며 필수 아님)
                type:Sequelize.STRING(256),
                allowNull:true,
            },
            phonenumber:{
                type:Sequelize.STRING(50),
                allowNull:true,
            },
            pfp:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            inactive: { 
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: 0
            },
            joinedwhen:{
                type:Sequelize.DATEONLY,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get: function(){
                    return moment(this.getDataValue('userdt')).format('Y-M-D')
                }
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
