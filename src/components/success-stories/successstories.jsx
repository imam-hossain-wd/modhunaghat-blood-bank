const { default: Image } = require("next/image");
const { Card, CardHeader, CardTitle, CardContent } = require("../ui/card");

const stories = [
    {
      name: "John Doe",
      story: "Thanks to the blood donation program, I was able to receive a life-saving transfusion during surgery.",
      image: "/path/to/john-doe.png",
    },
    {
      name: "Jane Smith",
      story: "The support for street children helped me complete my education and find a job.",
      image: "/path/to/jane-smith.png",
    },
  ];
  
  const SuccessStories = () => (
    <section className="py-12 w-[80%] mx-auto bg-gray-100">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((story, index) => (
            <Card className="flex flex-col justify-center items-center py-3" key={index}>
              <Image width={100} height={100} src={story.image} alt={story.name} />
              <CardHeader>
                <CardTitle className="font-semibold">{story.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center italic">"{story.story}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  export default SuccessStories;
  