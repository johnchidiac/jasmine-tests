describe("Servers test", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });


  it('should add two table cells in the server table to display the servers name and amount earned', function() {
    const tds = serverTbody.querySelectorAll('td');
    expect(tds.length).toEqual(2);
  });

  it('should display "Alice" in the Server Name field', function() {
    const nameField = serverTbody.querySelector('td');
    expect(nameField.innerText).toEqual('Alice');
  });

  afterEach(function() {
    serverNameInput.value = '';
  });
});
