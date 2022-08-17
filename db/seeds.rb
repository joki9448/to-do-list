puts 'Seeding database...🌱'

u1 = User.create!(username: "username", password: "123")
t1 = Task.create!(task: "Get this done", user_id: u1.id)

puts 'Seeding complete! 😎'