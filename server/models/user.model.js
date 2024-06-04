import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
    }, 

    password:{
        type: String,
        require: true,
    },

    profilePicture:{
        type: String,
        default:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAMFBMVEXk5ueutLepsLPW2dvn6erq7O3e4e
                KmrbCzubzZ3N23vb/KztC7wMPFycvCxsi+w8W0wiG1AAADfklEQVR4nO2b2XKrMAxAvcgLmOX//7YGkpamCcgCyXfm+kynz2dkWRa2olS
                j0Wg0Go1Go9FoNBqNRuMS4Jzy1tpOOQe1ZTZA+TTpEIIxJv+Pk/VQXQ0g9droHcbo2daNGfgx/HL6Vkuqnhgk/U5qFYvJVZLqzCepVaz3
                NQLmxgOnja6C13AUqo0wSntBPJVaFlLYy6Osstcs6eWQVtkryXnBgLWS9IJ0nu07L6k64UOBVcbLaPVlVmaUqPdlS7gQOgEtV2ql9cBvB
                ednzh+M5fdCl6wdPXd2lWfWQuDejPj6vof9bCytWQ8ib7hoa5hhrhGFpfQJ8ypiG5o/RNa92BHXUAdWLUvW4sx5GKlaxjImlyvo/17g7A
                ZpxXSFcys6spWeOLWoqaU15ydQ0yrSIlvx5hbxSNS8O7Hku/UFzrpF7mt4q/yFM5FRKncQRCttWDsIcr81sLaBMBODlTit/tleHmhfPj2
                vFbHj4r97I+3FwH/zRjh/DOeBuAGUiipwH0joIviDpQjZZUTudEtLqtQVOJRZTSJSpVlvhKwKjyCJa+an14T1CgK3uTsv5GWEsbJPw7h4
                BdZW+a3Xed6bWOFVGOypldAb1IuXO6qrRteaOFDg9aeuMExVxg0euG54M6Fh9ORrhWpjGfyJvwZaTIipZqS+zZyy49DHuPwNyULdQO0Al
                6O2oKD+kNTCqpF9uicPt4rzSM5Bl8a5z4u3JtWaYXFZySnZGnNvORg+51N4O7y1KYYQR+slB99ykKY+Hk5JPdx0P+ewCZgBeDuHgk/rtV
                4wj76B83Ms/iDLQbOMiwk+fTxsTmM2djwhc2r6OAmICtnQ3V9nl5lJutNG6G/uoAHGK5H6Cdl84xEOyp5XAyRhuivFQPV3Seklx+756oD
                rSfUi1t8RsPnGUD284tWAAfkp/5Bw7bbEJQ6pjBkuxOv2tNoRyY21Q980kLyoxyRiavkSpHi5+7fgK4R40QdE8JTfBjjyg2YJpfsROr49
                uKN4rIs+tVLmVdTqOO5N+ONVsoTkJ+lyrYJlJD/9UrzQy0gfKyCB3o0iu/AJ9u1FopDuQT4Ye1EpdHbJZpZGzodfmP8jghr+JA5TXwCT9
                MDVJx+ASHrquMoVEA2OZIV/gtiL5FGoK1rnySV3Su84HaMSPg+fnFUumJffR0tzPk3f2RqcWTUajUaj8b/yBYqKKfZPulcjAAAAAElFTk
                SuQmCC`
    }
},{
    timestamps: true,
})

const User=mongoose.model('User', userSchema);
export default User;