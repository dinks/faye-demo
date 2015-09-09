require "faye"
require "eventmachine"

EM.run {
  client = Faye::Client.new('http://localhost:6000/')

  client.subscribe("/messages") do |message|
    puts message.inspect
  end
}
