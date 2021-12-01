# json.extract! story, :id, :title, :body, :author_id
json.(story, :id, :title, :body, :author_id)

json.author story.author

json.comments story.comments

json.yums story.yums

json.users_who_yummed story.users_who_yummed