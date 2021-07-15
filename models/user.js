const Sequelize = require('sequelize');
const moment = require('moment');

//이메일 사용자명 비밀번호 생년월일 - 기본정보
//가입서버 전화번호 프로필사진 계정비활성화 계정삭제 - 부가정보
//추가할거: 친구목록 차단목록
module.exports = class User extends Sequelize.Model{
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
                defaultValue:"",
            },
            phonenumber:{
                type:Sequelize.STRING(50),
                allowNull:true,
                defaultValue:"",
            },
            pfp:{
                type:Sequelize.STRING(100),
                allowNull:true,
                defaultValue:"",
            },
            inactive: { 
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
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
            modelName:'User',
            tableName:'users',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    };
};
