const fullJoke = function(){
    return {
        joke: function(){
            const joke_list = [
                "I told my wife she was drawing her eyebrows too high. She looked surprised.",
                "Why don’t skeletons fight each other? They don’t have the guts.",
                "’m reading a book about anti-gravity. It’s impossible to put down!",
                "Parallel lines have so much in common… it’s a shame they’ll never meet.",
                "Why did the scarecrow win an award? He was outstanding in his field.",
                "I asked my dog what’s two minus two. He said nothing.",
                "Why can’t your nose be 12 inches long? Because then it’d be a foot.",
                "I used to play piano by ear, now I use my hands.",
                "My boss told me to have a good day… so I went home.",
                "I told my computer I needed a break, and it froze."
            ];

            let random_joke =  joke_list[Math.floor(Math.random())* joke_list.length];

            return random_joke;



        },
        author: function(){
            const author_list = [
                "Mark Twain",
                "Jane Austen",
                "Oscar Wilde",
                "Virginia Woolf",
                "George Orwell",
                "Agatha Christie",
                "Ernest Hemingway",
                "Maya Angelou",
                "J.K. Rowling",
                "Dr. Seuss",
            ]
            let random_author = author_list[Math.floor(Math.random())* author_list.length];

            return random_author;

        },
        date: function(){
            const date_list = [
                "March 5, 2021",
                "June 12, 2023",
                "October 29, 2020",
                "January 15, 2022",
                "August 3, 2019",
                "December 1, 2024",
                "May 20, 2018",
                "September 17, 2025",
                "February 28, 2020",
                "July 10, 2023"
            ];

            
            let random_date = date_list[Math.floor(Math.random())* date_list.length];

            return random_date;
        },
        message: function(){
            console.log(`"${this.joke}"- ${this.author}, ${this.date}`);
        }
    }
}

console.log(fullJoke().message())