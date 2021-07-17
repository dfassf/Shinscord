const Sequelize = require('sequelize');
const moment = require('moment');


/*

업로드된 서버
업로더
컨텐츠
업로드 시간


*/
module.exports = class Posts extends Sequelize.Model{
    static init(sequelize){
        return super.init({ 
            uploader:{ 
                type:Sequelize.STRING(50),
                allowNull:false,
            },
            content:{ 
                type:Sequelize.TEXT,
                allowNull : false,
            },
            uploadedat: { 
                type: Sequelize.INTEGER,
                allowNull: false
            },
            postedwhen:{
                type:Sequelize.DATEONLY,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Posts',
            tableName:'posts',
            charset:'utf8',
            collate:'utf8_general_ci'
        });
    };
};
