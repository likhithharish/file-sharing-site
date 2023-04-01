<h1>Create a .env file and place the below values :</h1>
<ul>
<li>PORT={ANY OPEN PORT}</li>
<li>DB_USERNAME={MONGODB ATLAS USERNAME}</li>
<li>DB_PASSWORD={MONGODB ATLAS PWD}</li>
</ul>

<p>See last on how to set username and password.</p>

<h2>NOTE:: The PORT you mention in .env file and '/client/src/service/api.js' - const API_URI = "http://localhost:{PORT}"; should be the same.</h2>
<hr>

<h1>Open terminal to server folder :</h1>
<ul>
  <li>Run 'npm install'</li>
  <li>Run 'npm start'</li>
  <li>Backend should be up and Running.</li>
</ul>
<hr>

<h1>Open terminak to 'client' folder :</h1>
<ul>
  <li>Run 'npm install'</li>
  <li>Run 'npm start'</li>
    <li>Frontend should be up and Running</li>
</ul>
<hr>

<h1>Setting MongoDB : (A dummy working username and password were set which will get deleted in one week)</h1>
<ul>
  <li>Once account is created, select free plan.</li>
  <li>Create username and password ( save this to paste inside .env file).</li>
    <li>Create the Cluster and click on "connect" . Then "connect to application" , select node.js and compatible version. copy the path and place it inside database/db.js [ const MONGO_URI = ``; ].</li>
</ul>
