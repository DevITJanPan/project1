let studentManagementStore = [
    {
        "courseId": "A001",
        "courseName": "Javascript Fullstack",
        "courseTime": 1200,
        "status": "active",
        "arrClass": [
            {
                "classId": "L001",
                "className": "JS230508",
                "descriptions": "Lớp học Fukuoka",
                "studentNumber": 20,
                "teacher": "Nguyễn Duy Quang",
                "status": 1, //1: chờ lớp, 2: hoạt động, 3: kết thúc
                "arrStudent": [
                    {
                        "studentId": "SV001",
                        "studentName": "Nguyễn Van A",
                        "year": 2000,
                        "address": "Hà Nội",
                        "email": "h@gmail.com",
                        "phone": "0123456789",
                        "sex": true,
                        "status": 1,//1: chờ lớp, 2: đang học, 3: bảo lưu, 4: đình chỉ, 5: tốt nghiệp
                    },
                    {
                        "studentId": "SV002",
                        "studentName": "Nguyễn Van B",
                        "year": 2001,
                        "address": "Đà Nẵng",
                        "email": "d@gmail.com",
                        "phone": "0123456789",
                        "sex": false,
                        "status": 2,//1: chờ lớp, 2: đang học, 3: bảo lưu, 4: đình chỉ, 5: tốt nghiệp
                    },
                    {
                        "studentId": "SV003",
                        "studentName": "Nguyễn Van C",
                        "year": 2002,
                        "address": "Hồ Chí Minh",
                        "email": "h@gmail.com",
                        "phone": "0123456789",
                        "sex": false,
                        "status": 3,//1: chờ lớp, 2: đang học, 3: bảo lưu, 4: đình chỉ, 5: tốt nghiệp
                    }
                ]
            },
            {
                "classId": "L002",
                "className": "JS230629",
                "descriptions": "Lớp học Fukuoka",
                "studentNumber": 18,
                "teacher": "Nguyễn Văn A",
                "status": 3, //1: chờ lớp, 2: hoạt động, 3: kết thúc
                "arrStudent": [
                    {
                        "studentId": "SV004",
                        "studentName": "Nguyễn Van D",
                        "year": 2003,
                        "address": "Hà Nội",
                        "email": "b@gmail.com",
                        "phone": "0123456789",
                        "sex": true,
                        "status": 1,//1: chờ lớp, 2: đang học, 3: bảo lưu, 4: đình chỉ, 5: tốt nghiệp
                    },
                    {
                        "studentId": "SV005",
                        "studentName": "Nguyễn Van E",
                        "year": 2004,
                        "address": "Đà Nẵng",
                        "email": "c@gmail.com",
                        "phone": "0123456789",
                        "sex": false,
                        "status": 2,//1: chờ lớp, 2: đang học, 3: bảo lưu, 4: đình chỉ, 5: tốt nghiệp
                    },
                    {
                        "studentId": "SV006",
                        "studentName": "Nguyễn Van F",
                        "year": 2005,
                        "address": "Đà Nẵng",
                        "email": "c@gmail.com",
                        "phone": "0123456789",
                        "sex": false,
                        "status": 3,//1: chờ lớp, 2: đang học, 3: bảo lưu, 4: đình chỉ, 5: tốt nghiệp
                    }
                ]
            }
        ]
    },
    {
        "courseId": "C002",
        "courseName": "Java Fullstack",
        "courseTime": 1000,
        "status": "active",
        "arrClass": [
            {
                "classId": "L001",
                "className": "JS230508",
                "descriptions": "Lớp học Fukuoka",
                "studentNumber": 20,
                "teacher": "Nguyễn Duy Quang",
                "status": 1, //1: chờ lớp, 2: hoạt động, 3: kết thúc
                "arrStudent": [
                    {
                        "studentId": "SV001",
                        "studentName": "Nguyễn Van B",
                        "year": 2000,
                        "address": "Hà Nội",
                        "email": "b@gmail.com",
                        "phone": "0123456789",
                        "sex": true,
                        "status": 1,//1: chờ lớp, 2: đang học, 3: bảo lưu, 4: đình chỉ, 5: tốt nghiệp
                    },
                    {
                        "studentId": "SV002",
                        "studentName": "Nguyễn Van C",
                        "year": 2001,
                        "address": "Đà Nẵng",
                        "email": "c@gmail.com",
                        "phone": "0123456789",
                        "sex": false,
                        "status": 2,//1: chờ lớp, 2: đang học, 3: bảo lưu, 4: đình chỉ, 5: tốt nghiệp
                    }
                ]
            },
            {
                "classId": "L002",
                "className": "JS230629",
                "descriptions": "Lớp học Fukuoka",
                "studentNumber": 29,
                "teacher": "Nguyễn Văn A",
                "status": 3, //1: chờ lớp, 2: hoạt động, 3: kết thúc
                "arrStudent": [
                    {
                        "studentId": "SV003",
                        "studentName": "Nguyễn Van D",
                        "year": 2000,
                        "address": "Hà Nội",
                        "email": "b@gmail.com",
                        "phone": "0123456789",
                        "sex": true,
                        "status": 1,//1: chờ lớp, 2: đang học, 3: bảo lưu, 4: đình chỉ, 5: tốt nghiệp
                    },
                    {
                        "studentId": "SV004",
                        "studentName": "Nguyễn Van E",
                        "year": 2001,
                        "address": "Đà Nẵng",
                        "email": "c@gmail.com",
                        "phone": "0123456789",
                        "sex": false,
                        "status": 2,//1: chờ lớp, 2: đang học, 3: bảo lưu, 4: đình chỉ, 5: tốt nghiệp
                    }
                ]
            }
        ]
    }
]
let userSystem = [
    { "userId": 1, "email": "user1@gmail.com", "password": "012345", "fullName": "Nguyễn  Văn  A","status":"active"},
    { "userId": 2, "email": "user2@gmail.com", "password": "123456", "fullName": "Nguyễn  Văn  B","status":"inActive" }
];
localStorage.setItem("studentManagementStore", JSON.stringify(studentManagementStore));
localStorage.setItem("userSystem", JSON.stringify(userSystem));