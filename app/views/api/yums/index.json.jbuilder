@yums.each do |yum|
  json.set! yum.id do
    json.partial! 'api/yums/yum', yum: yum
  end
end