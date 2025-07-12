import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Cypress Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Cypress Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  String _inputText = '';
  bool _isVisible = true;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _decrementCounter() {
    setState(() {
      _counter--;
    });
  }

  void _toggleVisibility() {
    setState(() {
      _isVisible = !_isVisible;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
              dataTestId: 'counter-text',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
              dataTestId: 'counter-value',
            ),
            const SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: _decrementCounter,
                  child: const Text('Decrease'),
                  dataTestId: 'decrease-button',
                ),
                const SizedBox(width: 10),
                ElevatedButton(
                  onPressed: _incrementCounter,
                  child: const Text('Increase'),
                  dataTestId: 'increase-button',
                ),
              ],
            ),
            const SizedBox(height: 20),
            TextField(
              onChanged: (value) {
                setState(() {
                  _inputText = value;
                });
              },
              decoration: const InputDecoration(
                labelText: 'Enter some text',
                border: OutlineInputBorder(),
              ),
              dataTestId: 'text-input',
            ),
            const SizedBox(height: 10),
            Text(
              'You typed: $_inputText',
              dataTestId: 'input-display',
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: _toggleVisibility,
              child: Text(_isVisible ? 'Hide Element' : 'Show Element'),
              dataTestId: 'toggle-button',
            ),
            const SizedBox(height: 10),
            if (_isVisible)
              Container(
                padding: const EdgeInsets.all(16),
                color: Colors.green[100],
                child: const Text(
                  'This element can be toggled',
                  dataTestId: 'toggleable-element',
                ),
              ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
        dataTestId: 'floating-action-button',
      ),
    );
  }
}