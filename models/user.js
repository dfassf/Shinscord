const Sequelize = require('sequelize');
const moment = require('moment');

//이메일 사용자명 비밀번호 생년월일 - 기본정보
//가입서버 전화번호 프로필사진 계정비활성화 계정삭제 - 부가정보

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({ 
            userid:{
                type:Sequelize.STRING(20),
                allowNull:false,
                unique:true,
            },
            userpw:{
                type:Sequelize.STRING(40),
                allowNull : false,
            },
            usermail:{
                type:Sequelize.STRING(40),
                allowNull : false,
            },
            username:{
                type:Sequelize.STRING(10),
                allowNull:false,
            },
            userimage:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            userdt:{
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
            modelName:'User',
            tableName:'users',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    };
};
