INSERT INTO department (name)
VALUES ("Finance"),
       ("Human Resources"),
       ("Sales"),
       ("Animal Control"),
       ("Engineering"),
       ("Management");

INSERT INTO role (title, salary, department_id)
VALUES ("Head Accounting", 80000, 1),
       ("Health and Safety Coordinator", 55000, 2),
       ("HR Manager", 70000, 6),
       ("Animal Handler", 50000, 4),
       ("Air Conditioning Engineer", 110000, 5),
       ("Product Specialist", 45000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jay", "Barbanel", 6),    
       ("Kellie", "Breed-Barbanel", 3),
       ("Maddie", "Barbanel", 4),
       ("Kensie", "Barbanel", 5);

UPDATE employee SET manager_id = 2
WHERE id = 1 or id = 3 or id = 4;