create table user (
  id int unsigned primary key auto_increment not null,
  username varchar(30) unique not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table rando (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  location varchar(100) not null,
  description text not null,
  image varchar(255),
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table comment (
   id int unsigned primary key auto_increment not null,
   comment text not null,
   date timestamp default current_timestamp,
   user_id int unsigned not null,
   rando_id int unsigned not null,
   foreign key(user_id) references user(id),
   foreign key(rando_id) references rando(id)
);
