Create a .env file and place the below values :
PORT={ANY OPEN PORT}
DB_USERNAME={MONGODB ATLAS USERNAME}
DB_PASSWORD={MONGODB ATLAS PWD}

#See last on how to set username and password.

Open terminal to server folder :
-- Run 'npm install'
-- Run 'npm start'
-- Backend should be up and Running.

Open terminak to 'client' folder :
-- Run 'npm install'
-- Run 'npm start'
-- Frontend should be up and Running

Setting MongoDB :
-- Once account is created, select free plan.
-- Create username and password ( save this to paste inside .env file).
-- Create the Cluster and click on "connect" . Then "connect to application" , select node.js and compatible version. copy the path and place it inside database/db.js [ const MONGO_URI = ``; ].
